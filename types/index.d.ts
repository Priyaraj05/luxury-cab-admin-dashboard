export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
}

export type Price_Catalog = {
  price_id: number;
  Price: number | null;
  City_Info: {
      CityName: string | null;
  } | null;
  Car_Details: {
      Model: string | null;
      Color: string | null;
  } | null;
}[] | null;
