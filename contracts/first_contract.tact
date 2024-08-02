import "@stdlib/deploy";

message Add {
  amount: Int as uint32;
}

contract FirstContract with Deployable {
  counter: Int as uint32;
  id: Int as uint32;

    init (id: Int) {
      self.counter = 0;
      self.id = 0;
    }

    receive("increment") {
      self.counter += 1;
    }

    receive(msg: Add) {
      self.counter += msg.amount;
    }

    get fun counter():Int {
      return self.counter;
    }

    get fun id():Int {
      return self.id;
    }
}
