import { createClient, RedisClientType } from "redis";
import { PubSubManager } from "../PubSubManager"; // Adjust the path as necessary

const mockRedisClient = {
        connect: jest.fn(),
        subscribe: jest.fn(),
        unsubscribe: jest.fn(),
        quit: jest.fn(),
      };
jest.mock("redis", () => ({
        createClient: jest.fn(() => mockRedisClient),
      }));

describe("PubSubManager", () => {
  let pubSubManager: PubSubManager;
  let mockRedisClient: RedisClientType;

  beforeEach(() => {
    pubSubManager = PubSubManager.getInstance();
    mockRedisClient = createClient();
    
  });

  afterEach(async () => {
    jest.clearAllMocks();
    await pubSubManager.disconnect();
  });

  test("should create a singleton instance", () => {
    const instance1 = PubSubManager.getInstance();
    const instance2 = PubSubManager.getInstance();
    expect(instance1).toBe(instance2);
  });

  test("should add a user to a stock subscription", () => {
        const userId = "user1";
        const stockTicker = "AAPLE";
      
        pubSubManager.addUsertoStock(userId, stockTicker);
        console.log(pubSubManager["Subscription"]);
        expect(pubSubManager["Subscription"].get(stockTicker)).toContain(userId);
      
      
        expect(mockRedisClient.subscribe).toHaveBeenCalledWith(
                stockTicker,
                expect.any(Function)
              );
      });

  it("should not resubscribe if stock already has users", () => {
    const userId1 = "user1";
    const userId2 = "user2";
    const stockTicker = "AAPL";

    pubSubManager.addUsertoStock(userId1, stockTicker);
    pubSubManager.addUsertoStock(userId2, stockTicker);

    expect(mockRedisClient.subscribe).toHaveBeenCalledTimes(1);
  });

  test("should remove a user from a stock subscription", () => {
    const userId = "user1";
    const stockTicker = "AAPL";

    pubSubManager.addUsertoStock(userId, stockTicker);
    pubSubManager.removeUserFromStock(userId, stockTicker);

    expect(pubSubManager["Subscription"].get(stockTicker)).not.toContain(userId);
  });

  test("should unsubscribe from a stock if no users remain", () => {
    const userId = "user1";
    const stockTicker = "NSE";

    pubSubManager.addUsertoStock(userId, stockTicker);
    pubSubManager.removeUserFromStock(userId, stockTicker);

    expect(mockRedisClient.unsubscribe).toHaveBeenCalledWith(stockTicker);
  });

  test("should forward messages to all subscribed users", () => {
    const userId1 = "user1";
    const userId2 = "user2";
    const stockTicker = "AAPL";
    const message = "Stock price updated";

    pubSubManager.addUsertoStock(userId1, stockTicker);
    pubSubManager.addUsertoStock(userId2, stockTicker);

    pubSubManager.forwardMessagetoUser(stockTicker, message);

    const subscribers = pubSubManager["Subscription"].get(stockTicker);
        console.log(subscribers);
    expect(subscribers).toContain(userId1);
    expect(subscribers).toContain(userId2);
  });

  test("should disconnect Redis client on shutdown", async () => {
    await pubSubManager.disconnect();
    expect(mockRedisClient.quit).toHaveBeenCalled();
  });
});
