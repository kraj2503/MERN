import { createClient, RedisClientType } from "redis";

export class PubSubManager {
  private static instance: PubSubManager;
  private redisClient: RedisClientType;
  private Subscription: Map<string, string[]>;

  private constructor() {
    this.redisClient = createClient();
    this.redisClient.connect();
    this.Subscription = new Map();
  }

  public static getInstance(): PubSubManager {
    if (!PubSubManager.instance) {
      PubSubManager.instance = new PubSubManager();
    }
    return PubSubManager.instance;
  }

  public addUsertoStock(userId: string, stockTicker: string) {
    if (!this.Subscription.has(stockTicker)) {
      this.Subscription.set(stockTicker, []);
    }
    this.Subscription.get(stockTicker)?.push(userId);

    if (this.Subscription.get(stockTicker)?.length === 1) {
      this.redisClient.subscribe(stockTicker, (listener) => {
        this.forwardMessagetoUser(stockTicker, listener);
      });
    }
    console.log(`${userId} Subscribed to Redis channel: ${stockTicker}`);
  }

  public removeUserFromStock(userId: string, stockTicker: string) {
    this.Subscription.set(
      stockTicker,
      this.Subscription.get(stockTicker)?.filter((sub) => sub !== userId) || []
    );

    if (this.Subscription.get(stockTicker)?.length === 0) {
      this.redisClient.unsubscribe(stockTicker);
    }
    console.log(`Unsubscribed to ${stockTicker}`);
  }

  public forwardMessagetoUser(stockTicker: string, message: string) {
    console.log(`Message recieved on Channel ${stockTicker}:${message}`);
    this.Subscription.get(stockTicker)?.forEach((sub) => {
      console.log(`Sending message to user : ${sub}`);
    });
  }
  public async disconnect() {
    await this.redisClient.quit();
  }
}
