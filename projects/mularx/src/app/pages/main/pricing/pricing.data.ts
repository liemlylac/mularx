export interface Plan {
  name: string;
  features: string[]
  price?: {
    monthly: number;
    annual: number;
  };
  priceLabel?: string;
  action: {
    color: 'primary' | 'accent' | 'warn';
    label: string;
  };

}

export const plansData: Plan[] = [
  {
    name: 'pricing.free',
    features: ['source', 'docs', 'template'],
    priceLabel: 'pricing.free',
    action: { color: 'accent', label: 'pricing.get_started' }
  },
  {
    name: 'pricing.standard',
    features: ['plan-free', 'support', 'update'],
    price: { monthly: 5.9, annual: 59 },
    action: { color: 'primary', label: 'pricing.choose_plan' }
  },
  {
    name: 'pricing.enterprise',
    features: ['plan-standard', 'customize-ui', 'more-features'],
    priceLabel: 'pricing.contact',
    action: { color: 'warn', label: 'pricing.contact' }
  }
]

