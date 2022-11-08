export const HOME = '/';
export const PRODUCT_DETAILS = '/:slug';
export const CART = '/cart';
export const LOGIN = '/login';
export const SIGN_UP = '/sign-up';
export const CHECKOUT_STEP_1 = '/order-summary';
export const CHECKOUT_STEP_2 = '/billing-details';
export const CHECKOUT_STEP_3 = '/payment';
export const SHOP = '/shop';
export const SEARCH = '/search/:searchWord';
export const SERVER_ERROR = '/server-error';
// PROFILE ROUTES
export const PROFILE_DASHBOARD = '/profile';
export const UPLOAD_AVATAR = 'avatar';
export const PURCHASE_HISTORY = 'purchase-history';
export const MANAGE_PROFILE = 'manage-profile';
export const WISHLIST = 'whishlist';
export const ORDER_DETAILS = 'purchase-history/:orderId';
export const ADD_REVIEW = 'purchase-history/:id/review/:slug';

// ADMIN ROUTES
export const ADD_CATEGORY = 'add-category';
export const ADMIN_DASHBOARD = '/admin';
export const ADMIN_ADD_PRODUCT = 'add-product';
export const ADMIN_ALL_ORDERS = 'all-orders';
export const ADMIN_VIEW_ORDER = 'all-orders/:id';
export const ADMIN_ALL_USERS = 'all-users';
export const ADMIN_ALL_PRODUCTS = 'all-products';
export const ADMIN_ALL_REVIEWS = 'all-reviews';
