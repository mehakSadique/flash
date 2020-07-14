export const menu = [
    {
        'id': 'home',
        'icon': 0xf80a,
        'name': 'About time to Vote',
      //  'url': '/home',
        'url': ['/main', 'home'],
        'isActive': true,
        'permissions': null,
        show: (features, permissions) => true
    },
    {
        'id': 'privacy',
        'icon': 0xf2b9,
        'name': 'Privacy Policy',
      //  'url': '/contact-list',
        'url': ['/main', 'privacy'],
        'isActive': false,
        'permissions': null,
        show: (features, permissions) => true
    },
    {
        'id': 'terms',
        'icon': 0xf783,
        'name': 'Terms of Service',
        'url': ['/main', 'terms'],
        'isActive': false,
        'permissions': null,
        show: (features, permissions) => true
    },

    {
      'id': 'version',
      'icon': 0xf783,
      'name': 'version 0.00',
      // 'url': ['/main', 'terms'],
      'isActive': false,
      'permissions': null,
      show: (features, permissions) => true
  },


];
