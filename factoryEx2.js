class BadGuy {
  constructor(type, damage, health, attackShout) {
    this.type = type;
    this.damage = damage;
    this.health = health;
    this.attackShout = attackShout;
  }
  shout() {
    console.log(`${this.type} says: ${this.attackShout}`);
  }
}

// In video games, we often fight the same enemy over and over again.
// A certain room in a dungeon can be filled with skeletons. Each the very carbon copy of the next. Clones if you will.

// So, what are factories? According to Wikipedia -
// "In object-oriented programming 'OOP', a factory is an object for creating other objects".
// To better understand this, Let's make a factory class below called BadGuyFactory.

class BadGuyFactory {
  constructor(factoryType) {
    this.factoryType = factoryType;
    this.badGuyCollection = [];
  }

  makeNewBadGuy(damage, health, attackShout) {
    const newBadGuy = new BadGuy(this.factoryType, damage, health, attackShout);
    this.badGuyCollection.push(newBadGuy);
  }

  printBadGuys() {
    for (let badGuy of this.badGuyCollection) {
      console.log(badGuy);
    }
  }
}

let skeletonFactory = new BadGuyFactory('Skeleton');

// We create a new object the very same way we did before. No difference there.
// This object has two properties, 'factoryType' and 'badGuyCollection'.
// Since we want this particular factory to only produce one type of enemy, we will need to specify which type.
// In this case, We have decided the type of enemy we produce will be a 'Skeleton'.
// The badGuyCollection property is an array. We will get to that later. For now let's print what we have!

console.log('\n======= FACTORY ======= \n');
console.log(skeletonFactory);

// It's just an object.
// But let's talk about what makes this object special.

// There are two methods in this class, 'makeNewBadGuy' and 'printBadGuys'.
// The makeNewBadGuy method literally creates a new BadGuy object from the previous BadGuy class.
// We're doing just like before, using the 'new' keyword and passing in arguments,
// but this time we're doing it in another objects method.

// The new bad guys properties are defined by us manually, except for the type.
// The type was already decided when we created the factory, And the factory will use that as the new objects 'type' argument.
// This way, every time we generate a new bad guy it will be the exact same type of enemy, but with slightly different stats.

// With this, we can create some skeleton baddies for our hero to fight!

// But wait, remember the badGuyCollections array we had earlier? Every time the factory creates a new skeleton,
// it will push the skeleton into that array. So not only does this factory make things, it also STORES them.
// Finally, the printBadGuys method simply loops through the collection and console logs each bad guy.

// Lets make some skeletons!

skeletonFactory.makeNewBadGuy(4, 12, 'Urgghh...');
skeletonFactory.makeNewBadGuy(6, 10, 'AHH!!');
skeletonFactory.makeNewBadGuy(3, 8, 'blehh...');
skeletonFactory.makeNewBadGuy(5, 12, 'Arg!');

// With each execution, the factory will instantiate a new badGuy object and store the object in its collection.

// Now Let's print out the results using the factories printBadGuys method.

console.log('\n======= BAD GUYS ======= \n');
skeletonFactory.printBadGuys();

// As always, we could add more complex functionality to do even cooler things.
// For example, a method that allows us to select a single skeleton, instead of printing them all.

// But I will leave that to you.
