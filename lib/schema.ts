import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const ticketPreOrders = pgTable("ticket_pre_orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  ticketType: text("ticket_type").notNull(),
  subscribeNewsletter: boolean("subscribe_newsletter").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTicketPreOrderSchema = createInsertSchema(ticketPreOrders).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  ticketType: z.enum(["standard", "deluxe", "vip"], {
    required_error: "Please select a ticket type",
  }),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertTicketPreOrder = z.infer<typeof insertTicketPreOrderSchema>;
export type TicketPreOrder = typeof ticketPreOrders.$inferSelect;

export const sponsorshipInquiries = pgTable("sponsorship_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSponsorshipInquirySchema = createInsertSchema(sponsorshipInquiries).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
});

export type InsertSponsorshipInquiry = z.infer<typeof insertSponsorshipInquirySchema>;
export type SponsorshipInquiry = typeof sponsorshipInquiries.$inferSelect;

export const contactRequests = pgTable("contact_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  requestInvitationLetter: text("request_invitation_letter").notNull().default('false'),
  nationality: text("nationality"),
  passportNo: text("passport_no"),
  passportIssuingOffice: text("passport_issuing_office"),
  dateOfIssue: text("date_of_issue"),
  passportExpiration: text("passport_expiration"),
  jobTitle: text("job_title"),
  durationOfStay: text("duration_of_stay"),
  additionalMessage: text("additional_message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
}).extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  requestInvitationLetter: z.string(),
  nationality: z.string().optional(),
  passportNo: z.string().optional(),
  passportIssuingOffice: z.string().optional(),
  dateOfIssue: z.string().optional(),
  passportExpiration: z.string().optional(),
  jobTitle: z.string().optional(),
  durationOfStay: z.string().optional(),
});

export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;
