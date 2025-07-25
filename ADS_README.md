# Ad Integration Guide

This guide explains how to set up and manage ads on your Rate Limiter website to generate revenue.

## Prerequisites

1. A Google AdSense account (sign up at https://www.google.com/adsense)
2. Your website must be live on a public domain (not localhost)

## Setup Instructions

### 1. Replace Publisher ID

In the following files, replace `YOUR_PUBLISHER_ID` with your actual AdSense publisher ID:

- `client/index.html` - Line with `ca-pub-YOUR_PUBLISHER_ID`
- `client/src/components/ads/AdSenseAd.jsx` - Line with `data-ad-client="ca-pub-YOUR_PUBLISHER_ID"`

### 2. Create Ad Units

1. Log in to your Google AdSense account
2. Go to Ads > Overview
3. Click "Get new ad code"
4. Create the following ad units:
   - **Top Banner Ad**: Responsive display ad
   - **Left Sidebar Ad**: Vertical display ad (160x600)
   - **Right Sidebar Ad**: Vertical display ad (160x600)
   - **In-Content Ad**: Responsive display ad

### 3. Update Ad Slots

In `client/src/App.jsx`, replace the following placeholders with your actual ad slot IDs:

- `YOUR_TOP_BANNER_SLOT`
- `YOUR_LEFT_SIDEBAR_SLOT`
- `YOUR_RIGHT_SIDEBAR_SLOT`
- `YOUR_IN_CONTENT_SLOT`

## Ad Placements

1. **Top Banner Ad**: Appears below the navigation bar
2. **Left Sidebar Ad**: Vertical ad on the left side (desktop only)
3. **Right Sidebar Ad**: Vertical ad on the right side (desktop only)
4. **In-Content Ad**: Appears between content sections

## Testing

- In development mode, you'll see placeholder elements instead of real ads
- To test real ads, build and deploy your application to a live domain
- Use the Google AdSense preview tool to verify ad placements

## Best Practices

1. **Don't click your own ads** - This violates AdSense policies
2. **Follow AdSense policies** - Ensure your content complies with Google's policies
3. **Monitor performance** - Use the AdSense dashboard to track revenue and performance
4. **Optimize placement** - Use the highest performing ad units in the most visible locations

## Troubleshooting

- **Ads not showing?** Ensure your domain is verified in AdSense
- **Getting policy violations?** Check the Policy Center in your AdSense account
- **Slow loading?** Consider lazy loading ads or using smaller ad units

## Additional Monetization Options

1. **Affiliate Marketing**: Add affiliate links to relevant tools/services
2. **Sponsored Content**: Partner with companies for sponsored posts
3. **Premium Features**: Offer premium features for a subscription fee
4. **Donations**: Add a donation button for user support

## Support

For AdSense support, visit: https://support.google.com/adsense
