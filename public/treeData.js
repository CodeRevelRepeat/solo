var treeData = [
  {
    "name": "Let's Get Started",
    "parent": "null",
    "bottom": false,
    "_children": [

    //Level 2

      {
        "name": "Your work includes licensed code that restricts sub-licensing",
        "parent": "Let's Get Started",
        "bottom": false,
        "_children": [

          //Level 3

            {
              "name": "Comply with applicable restrictions in code used.  For example, if you incorporated code with a license that requires that all derivative works use the same license, use that license.",
              "parent": "Your work includes licensed code that restricts sub-licensing",
              "bottom": true
            },

        ]

      },


      //Level 2


      {
        "name": "You work does not include licensed code with restrictions",
        "parent": "Let's Get Started",
        "bottom": false,
        "_children": [


            //Level 3

          {
            "name": "You want to retain all rights",
            "parent": "Start Here",
            "bottom": false,
            "_children": [

            //Level 4
              {
                "name": "You want to sell the software",
                "parent": "You want to retain all rights", 
                "bottom": false,
                "_children": [

                //Level 5
                    {
                      "name": "You need an End User License Agreement.  There are no standard forms.  Depending on the scale of your project and needs, either engage a lawyer or use an online legal service to prepare an End User License Agreement.",
                      "parent": "You want to sell the software.",
                      "bottom": true,
                      
                    },

                ]  //closing bracket for you want to sell the software children
              },  //closing object bracket for you want to sell the software


          //Level 4
          {
            "name": "You are not selling or distributing",
            "parent": "You want to retain all rights",
            "bottom": false,
            "_children": [

            //Level 5

                {
                  "name": "No license needed.  You will have default copyright protection. Be aware of any terms of service you opt into if you post your code on sites like github.",
                  "parent": "You are not selling or distributing",
                  "bottom": true,
                               }

            ]  //closing bracket for you are not selling children
          } //closing object bracket for you are not selling
        ]  //closing bracket for you want to retain all rights children
      },  //closing bracket for you want to retain all rights object

      //Level 3
      {
        "name": "You want to retain some rights",
        "parent": "Start Here",
        "bottom": false,
        "_children": [

          //Level 4

          {
            "name": "You want copyleft protection.",
            "parent": "Retain some rights",
            "bottom": false,
            "_children": [

              //Level 5

                {
                  "name": "If your code is included in a project, you want that whole project to remain open source.",
                  "parent": "You want copyleft protection.",
                  "bottom": false,
                  "_children": [

                    //Level 6

                    {
                      "name": "GNU General Public License, version 2 (GPL)",
                      "parent": "If your code is included in a project, you want that whole project to remain open source.",
                      "bottom": true,
                      "url": "https://www.gnu.org/licenses/gpl-2.0.html"
                    }

                  ]

                },

              //Level 5


              {
                "name": "You are ok with your code being used in proprietary projects.",
                "parent": "You want copyleft protection.",
                "bottom": false,
                "_children": [

                    //Level 6

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



            //Level 3

            {
              "name": "You want to give up all rights",
              "parent": "Start Here",
              "bottom": false,
              "_children": [

                //Level 4
                {
                  "name": "CC0 from Creative Commons",
                  "parent": "You want to give up all rights",
                  "bottom": true,
                  "url": "https://creativecommons.org/publicdomain/zero/1.0/legalcode"

                }

              ]
            }


        ] //sub-licensing not an issue children closing bracket


      } //Sub-licensing not an issue object closing bracket

    ] //Let's get started children closing bracket
  }  //Let's get started object closing bracket
];   //treeData bracket






