    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'flexxwavefitness.myshopify.com',
          storefrontAccessToken: 'a440f77bf41831f4b1afdc807598ca47',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1899222925358],
            node: document.getElementById('product-component-521b8e6ebbb'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "buttonDestination": "checkout",
    "variantId": "all",
    "width": "240px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "SIGN UP"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#294458",
        "font-family": "Montserrat, sans-serif",
        "padding-left": "px",
        "padding-right": "px",
        ":hover": {
          "background-color": "#253d4f"
        },
        "border-radius": "0px",
        ":focus": {
          "background-color": "#253d4f"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Montserrat, sans-serif"
      },
      "description": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-size": "12px",
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#294458",
        "font-family": "Montserrat, sans-serif",
        ":hover": {
          "background-color": "#253d4f"
        },
        "border-radius": "0px",
        ":focus": {
          "background-color": "#253d4f"
        },
        "font-weight": "bold"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#294458",
        "font-family": "Montserrat, sans-serif",
        "padding-left": "px",
        "padding-right": "px",
        ":hover": {
          "background-color": "#253d4f"
        },
        "border-radius": "0px",
        ":focus": {
          "background-color": "#253d4f"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Montserrat, sans-serif"
      },
      "description": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Montserrat, sans-serif",
        "background-color": "#294458",
        ":hover": {
          "background-color": "#253d4f"
        },
        ":focus": {
          "background-color": "#253d4f"
        },
        "font-weight": "bold"
      },
      "count": {
        "font-size": "16px"
      }
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Montserrat, sans-serif"
      },
      "select": {
        "font-family": "Montserrat, sans-serif"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();