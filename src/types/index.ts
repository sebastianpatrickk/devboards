import { Card, List } from "@prisma/client";

export type ListWithCards = List & { cards: Card[] };

export type CardWithList = Card & { list: List };

export interface NavItem {
  href: string;
  label: string;
}
export interface DashboardNavItem {
  href: string;
  label: string;
}
