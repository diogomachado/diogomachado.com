export const GA_TRACKING_ID = 'G-CXDLT1WM18'

export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
