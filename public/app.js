var treeData = [
  {
    "name": "Click Me",
    "parent": "null",
    "bottom": false,
    "_children": [

    //Level 2
      {
        "name": "You want to retain all rights",
        "parent": "Click Me",
        "bottom": false,
        "_children": [

        //Level 3
          {
            "name": "You want to sell the software",
            "parent": "You want to retain all rights", 
            "bottom": false,
            "_children": [

            //Level 4
                {
                  "name": "Engage a lawyer or use online legal service to prepare an end user license agreement",
                  "parent": "You want to sell the software",
                  "bottom": true
                },

            ]
          },


          //Level 3
          {
            "name": "You are not selling or distributing",
            "parent": "You want to retain all rights",
            "bottom": false,
            "_children": [

            //Level 4

                {
                  "name": "No license needed.  You will have default copyright protection. Be aware of any terms of service you opt into if you post your code on github.",
                  "parent": "You are not selling or distributing",
                  "bottom": true
                }

            ]
          }
        ]
      },

      //Level 2 
      {
        "name": "You want to retain some rights",
        "parent": "Click Me",
        "bottom": false
      },

      //Level 2

      {
        "name": "You want to give up all rights",
        "parent": "Click Me",
        "bottom": false
      }
    ]
  }
];


// ************** Generate the tree diagram  *****************
var margin = {top: 40, right: 120, bottom: 20, left: 120},
  width = 960 - margin.right - margin.left,
  height = 900 - margin.top - margin.bottom;
  
var i = 0,
  duration = 750,
  root;

var tree = d3.layout.tree()
  .size([height, width]);

var diagonal = d3.svg.diagonal()
  .projection(function(d) { return [d.x, d.y]; });

var svg = d3.select("body").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;
  
update(root);

d3.select(self.frameElement).style("height", "500px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 100; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
    .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + source.x0 + "," + source.y0 + ")"; })
    .on("click", click);

  nodeEnter.append("circle")
    .attr("r", 1e-6)
    .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
    // .attr("y", function(d) { return d.children || d._children ? -18 : 18; })
    .attr("y", -18)
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(function(d) { return d.name; })
    .style("fill-opacity", 1e-6)
    .style("font", function(d){ 
        if(d.bottom){
          return "15px sans-serif";
        }
    });

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
    .duration(duration)
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  nodeUpdate.select("circle")
    .attr("r", 10)
    .style("fill", function(d) { 
      if(d.bottom){
        return "red";
      }
      else if(d._children){
        return "green";
      }
      else {
        return "#fff"
      }

    });

  nodeUpdate.select("text")
    .style("fill-opacity", function(d) { 
      if(d.bottom){
        return 1;
      }
      else if(d._children){
        return 1;
      }
      else {
        return 0.15;
      }
      
    });

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
    .duration(duration)
    .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
    .remove();

  nodeExit.select("circle")
    .attr("r", 1e-6);

  nodeExit.select("text")
    .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
    .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
    .attr("class", "link")
    .attr("d", function(d) {
    var o = {x: source.x0, y: source.y0};
    return diagonal({source: o, target: o});
    });

  // Transition links to their new position.
  link.transition()
    .duration(duration)
    .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
    .duration(duration)
    .attr("d", function(d) {
    var o = {x: source.x, y: source.y};
    return diagonal({source: o, target: o});
    })
    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
  d.x0 = d.x;
  d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
  d._children = d.children;
  d.children = null;
  } else {
  d.children = d._children;
  d._children = null;
  }
  update(d);
}