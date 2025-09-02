import { type User, type InsertUser, type TicketPreOrder, type InsertTicketPreOrder } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Ticket pre-order methods
  createTicketPreOrder(preOrder: InsertTicketPreOrder): Promise<TicketPreOrder>;
  getTicketPreOrderByEmail(email: string): Promise<TicketPreOrder | undefined>;
  getAllTicketPreOrders(): Promise<TicketPreOrder[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private ticketPreOrders: Map<string, TicketPreOrder>;

  constructor() {
    this.users = new Map();
    this.ticketPreOrders = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createTicketPreOrder(insertPreOrder: InsertTicketPreOrder): Promise<TicketPreOrder> {
    const id = randomUUID();
    const preOrder: TicketPreOrder = {
      ...insertPreOrder,
      id,
      company: insertPreOrder.company || null,
      subscribeNewsletter: insertPreOrder.subscribeNewsletter || false,
      createdAt: new Date(),
    };
    this.ticketPreOrders.set(id, preOrder);
    return preOrder;
  }

  async getTicketPreOrderByEmail(email: string): Promise<TicketPreOrder | undefined> {
    return Array.from(this.ticketPreOrders.values()).find(
      (preOrder) => preOrder.email === email,
    );
  }

  async getAllTicketPreOrders(): Promise<TicketPreOrder[]> {
    return Array.from(this.ticketPreOrders.values());
  }
}

export const storage = new MemStorage();
