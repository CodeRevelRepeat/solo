var treeData = [
  {
    "name": "Start Here",
    "parent": "null",
    "bottom": false,
    "_children": [

    //Level 2
      {
        "name": "You want to retain all rights.",
        "parent": "Start Here",
        "bottom": false,
        "_children": [

        //Level 3
          {
            "name": "You want to sell the software.",
            "parent": "You want to retain all rights.", 
            "bottom": false,
            "_children": [

            //Level 4
                {
                  "name": "Engage a lawyer or use an online legal service to prepare an end user license agreement.",
                  "parent": "You want to sell the software.",
                  "bottom": true,
                  "sibling": "No license needed.  You will have default copyright protection. Be aware of any terms of service you opt into if you post your code on sites like github."
                },

            ]
          },


          //Level 3
          {
            "name": "You are not selling or distributing.",
            "parent": "You want to retain all rights.",
            "bottom": false,
            "_children": [

            //Level 4

                {
                  "name": "No license needed.  You will have default copyright protection. Be aware of any terms of service you opt into if you post your code on sites like github.",
                  "parent": "You are not selling or distributing",
                  "bottom": true,
                  "sibling": "Engage a lawyer or use an online legal service to prepare an end user license agreement."
                }

            ]
          }
        ]
      },

      //Level 2 
      {
        "name": "You want to retain some rights.",
        "parent": "Start Here",
        "bottom": false,
        "_children": [

          //Level 3

          {
            "name": "You want copyleft protection.",
            "parent": "You want to retain some rights.",
            "bottom": false,
            "_children": [

              //Level 4

                {
                  "name": "If your code is included in a project, you want that whole project to remain open source.",
                  "parent": "You want copyleft protection.",
                  "bottom": false,
                  "_children": [

                    //Level 5

                    {
                      "name": "GNU General Public License, version 2 (GPL)",
                      "parent": "If your code is included in a project, you want that whole project to remain open source.",
                      "bottom": true,
                      "url": "https://www.gnu.org/licenses/gpl-2.0.html"
                    }

                  ]

                },

              //Level 4


              {
                "name": "You are ok with your code being used in proprietary projects.",
                "parent": "You want copyleft protection.",
                "bottom": false,
                "_children": [

              //Level 5

              {
                  "name": "Mozilla Public License 2.0",
                  "parent": "You are ok with your code being used in proprietary projects.",
                  "bottom": true,
                  "url": "https://www.mozilla.org/MPL/2.0/"

              }

            ]

          },





            ]

          },







        ]
      },














      //Level 2

      {
        "name": "You want to give up all rights.",
        "parent": "Start Here",
        "bottom": false,
        "_children": [

          //Level 3
          {
            "name": "CC0",
            "parent": "You want to give up all rights.",
            "bottom": true,
            "url": "https://creativecommons.org/publicdomain/zero/1.0/legalcode"

          }

        ]
      }
    ]
  }
];






