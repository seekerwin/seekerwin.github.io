function anyCollision(t,n){for(var o=t.getBoundingClientRect(),i=0;i<n.length;i++){var l=n[i],e=l.getBoundingClientRect();if(!(o.right<e.left||o.left>e.right||o.bottom<e.top||o.top>e.bottom)&&t!=l)return!0}return!1}function isColliding(t,n){return anyCollision(t,n)}function allCollisions(t,n){for(var o=[],i=t.getBoundingClientRect(),l=0;l<n.length;l++){var e=n[l],r=e.getBoundingClientRect();!(i.right<r.left||i.left>r.right||i.bottom<r.top||i.top>r.bottom)&&t!=e&&o.push(e)}return o}function getCollisions(t,n){return allCollisions(t,n)}