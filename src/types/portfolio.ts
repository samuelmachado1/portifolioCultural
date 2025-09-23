export interface BoardHouse {
  id: string;
  type: "experience" | "milestone" | "decorative";
  position: { x: number; y: number };
  data?: ExperienceData;
  style: HouseStyle;
}

export interface ExperienceData {
  title: string;
  date: string;
  description: string;
  flyerUrl?: string;
  fullDescription?: string;
  tags?: string[];
  achievements?: string[];
  skills?: string[];
  links?: Array<{
    title: string;
    url: string;
  }>;
  clippingLinks?: Array<{
    title: string;
    url: string;
  }>;
  socialLinks?: {
    website?: string;
    social?: string;
    video?: string;
    spotify?: string;
    youtube?: string;
    instagram?: string;
  };
  impactReport?: {
    investment?: string;
    estimatedReturn?: string;
    directJobs?: number;
    indirectJobs?: number;
    localSpending?: string;
    audience?: string;
    socialReach?: string;
    mediaInsertions?: string;
    followerGrowth?: string;
    womenInProduction?: string;
    odsAlignment?: string[];
  };
  eventPhotos?: string[];
}

export interface HouseStyle {
  size: "small" | "medium" | "large";
  theme: "cultural" | "artistic" | "production" | "education" | "milestone";
  customCSS?: string;
  icon?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    bio: string;
    avatar?: string;
    contact: {
      email?: string;
      phone?: string;
      whatsapp?: string;
      social?: {
        instagram?: string;
        linkedin?: string;
        facebook?: string;
        youtube?: string;
        spotify?: string;
      };
    };
  };
  houses: BoardHouse[];
  boardConfig: {
    width: number;
    height: number;
    backgroundColor: string;
    pathColor: string;
  };
}
