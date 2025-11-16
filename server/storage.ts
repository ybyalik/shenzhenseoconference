import { type User, type InsertUser, type TicketPreOrder, type InsertTicketPreOrder, type SponsorshipInquiry, type InsertSponsorshipInquiry, type ContactRequest, type InsertContactRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Ticket pre-order methods
  createTicketPreOrder(preOrder: InsertTicketPreOrder): Promise<TicketPreOrder>;
  getTicketPreOrderByEmail(email: string): Promise<TicketPreOrder | undefined>;
  getAllTicketPreOrders(): Promise<TicketPreOrder[]>;
  
  // Sponsorship inquiry methods
  createSponsorshipInquiry(inquiry: InsertSponsorshipInquiry): Promise<SponsorshipInquiry>;
  getAllSponsorshipInquiries(): Promise<SponsorshipInquiry[]>;
  
  // Contact request methods
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getAllContactRequests(): Promise<ContactRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private ticketPreOrders: Map<string, TicketPreOrder>;
  private sponsorshipInquiries: Map<string, SponsorshipInquiry>;
  private contactRequests: Map<string, ContactRequest>;

  constructor() {
    this.users = new Map();
    this.ticketPreOrders = new Map();
    this.sponsorshipInquiries = new Map();
    this.contactRequests = new Map();
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

  async createSponsorshipInquiry(insertInquiry: InsertSponsorshipInquiry): Promise<SponsorshipInquiry> {
    const id = randomUUID();
    const inquiry: SponsorshipInquiry = {
      ...insertInquiry,
      id,
      phone: insertInquiry.phone || null,
      message: insertInquiry.message || null,
      createdAt: new Date(),
    };
    this.sponsorshipInquiries.set(id, inquiry);
    return inquiry;
  }

  async getAllSponsorshipInquiries(): Promise<SponsorshipInquiry[]> {
    return Array.from(this.sponsorshipInquiries.values());
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = randomUUID();
    const request: ContactRequest = {
      ...insertRequest,
      id,
      additionalMessage: insertRequest.additionalMessage || null,
      createdAt: new Date(),
    };
    this.contactRequests.set(id, request);
    return request;
  }

  async getAllContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }
}

export const storage = new MemStorage();
