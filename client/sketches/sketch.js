export default function sketch (p) {
  var wind = ''
  var velocity = 150
  // texture for the particle
  var particle_texture = null;

  // variable holding our particle system
  var ps = null;

  p.preload = () => {
      particle_texture = p.loadImage("/assets/images/particle_texture.png");
  }

  p.setup = () => {
    //p.bg = p.loadImage("assets/images/sunset.svg");
        //set the canvas size
      p.createCanvas(p.windowWidth, p.windowHeight)
      var x = p.windowWidth * 0.55
      var y = p.windowHeight * 0.27
      //initialize our particle system
      ps = new ParticleSystem(p,0,p.createVector(x, y),particle_texture);
  }

  p.windowResized = () => {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
}
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      wind = props.wind
      //velocity = props.velocity * 10
      };

  p.draw = () => {
    //p.background(p.bg)
    //console.log({velocity})
    //createVector is translating a set of variables into coordinates that p5 can understand, and can be passed into other functions to affect animation.
    var northWest = p.createVector(p.map(p.width/2, 0, p.width, -0.2, 0.2), p.map(p.height-p.height, 0, p.height, -0.2, 0.2))
    var southEast = p.createVector(p.map(p.width/2, 0, p.width, -0.2, 0.2), p.map(p.height, 0, p.height, -0.2, 0.2))
    var northEast = p.createVector(p.map(p.width, 0, p.width, -0.2, 0.2), p.map(p.height/2, 0, p.height, -0.2, 0.2))
    var southWest = p.createVector(p.map(p.width - p.width, 0, p.width, -0.2, 0.2), p.map(p.height/2, 0, p.height, -0.2, 0.2))
    var north = p.createVector(p.map(p.width- (p.width/8), 0, p.width, -0.2, 0.2), p.map(p.height/8, 0, p.height, -0.2, 0.2))
    var east = p.createVector(p.map(p.width- (p.width/8), 0, p.width, -0.2, 0.2), p.map(p.height - (p.height/8), 0, p.height, -0.2, 0.2))
    var west = p.createVector(p.map(p.width/8, 0, p.width, -0.2, 0.2), p.map(p.height/8, 0, p.height, -0.2, 0.2))
    var south = p.createVector(p.map(p.width/8, 0, p.width, -0.2, 0.2), p.map(p.height - (p.height/8), 0, p.height, -0.2, 0.2))

      p.clear()
      //pass the wind as a parameter of applyForce function declared below
      if (wind == "N" || wind == "North"){
        ps.applyForce(north)
      } else if (wind == 'W' || wind == 'West'){
        ps.applyForce(west)
      } else if (wind == 'E' || wind == 'East'){
        ps.applyForce(east)
      }else if (wind == 'S' || wind == 'South'){
        ps.applyForce(south)
      } else if (wind == 'NW' || wind == "NNW"){
        ps.applyForce(northWest)
      } else if (wind == 'NE' || wind == "NNE" || wind == "ENE"){
        ps.applyForce(northEast)
      }else if (wind == 'SW' || wind == "SSW"){
        ps.applyForce(southWest)
    }else if (wind == 'SE' || wind == "SSE" || wind == "ESE"){
      ps.applyForce(southEast)
    }

      ps.run();
      for (var i = 0; i < 2; i++) {
          ps.addParticle(p, velocity);
      }
  }



}

//========= PARTICLE SYSTEM ===========

/*
 * A basic particle system class
 * @param num the number of particles
 * @param v the origin of the particle system
 * @param img_ a texture for each particle in the system
 * @constructor
 */
var ParticleSystem = function(p,num,v,img_) {

    this.particles = [];
    this.origin = v.copy(); // we make sure to copy the vector value in case we accidentally mutate the original by accident
    this.img = img_
    for(var i = 0; i < num; ++i){
        this.particles.push(new Particle(p,this.origin,this.img));
    }
};

/**
 * This function runs the entire particle system.
 */
ParticleSystem.prototype.run = function() {

    // cache length of the array we're going to loop into a variable
    // You may see <variable>.length in a for loop, from time to time but
    // we cache it here because otherwise the length is re-calculated for each iteration of a loop
    var len = this.particles.length;

    //loop through and run particles
    for (var i = len - 1; i >= 0; i--) {
        var particle = this.particles[i];
        particle.run();

        // if the particle is dead, we remove it.
        // javascript arrays don't have a "remove" function but "splice" works just as well.
        // we feed it an index to start at, then how many numbers from that point to remove.
        if (particle.isDead()) {
            this.particles.splice(i,1);
        }
    }
}

/*
 * Method to add a force vector to all particles currently in the system
 * @param dir a p5.Vector describing the direction of the force.
 */
ParticleSystem.prototype.applyForce = function(dir) {
    var len = this.particles.length;
    for(var i = 0; i < len; ++i){
        this.particles[i].applyForce(dir);
    }
}

/**
 * Adds a new particle to the system at the origin of the system and with
 * the originally set texture.
 */
ParticleSystem.prototype.addParticle = function(p, lifespan) {
    this.particles.push(new Particle(p,this.origin,this.img, lifespan));
}

//========= PARTICLE  ===========
/**
 *  A simple Particle class, renders the particle as an image
 */
var Particle = function (p, pos, img_, lifespan) {
    this.p = p

    this.loc = pos.copy();

    var vx = p.randomGaussian() * 0.6;
    var vy = p.randomGaussian() * 0.3 - 1;

    this.vel = p.createVector(vx,vy);
    this.acc = p.createVector();
    this.lifespan = lifespan;
    this.texture = img_;
}

/**
 *  Simulataneously updates and displays a particle.
 */
Particle.prototype.run = function() {
    this.update();
    this.render();
}

/**
 *  A function to display a particle
 */
Particle.prototype.render = function() {
    this.p.imageMode(this.p.CENTER);
    this.p.tint(255,this.lifespan);
    this.p.image(this.texture,this.loc.x,this.loc.y);
}

/**
 *  A method to apply a force vector to a particle.
 */
Particle.prototype.applyForce = function(f) {
    this.acc.add(f);
}

/**
 *  This method checks to see if the particle has reached the end of it's lifespan,
 *  if it has, return true, otherwise return false.
 */
Particle.prototype.isDead = function () {
    if (this.lifespan <= 0.0) {
        return true;
    } else {
        return false;
    }
}

/**
 *  This method updates the position of the particle.
 */
Particle.prototype.update = function() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.lifespan -= 2.5;
    this.acc.mult(0);
}
