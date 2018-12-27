
import axios from 'axios';
import {
  decorate, observable, action,
} from 'mobx';


class Store {
  itemlist = []

  // update itemlist
  updateList=(itemlist) => {
    this.itemlist = itemlist;
  }

  // update Detail and name
  updateDetails=(name, Details) => {
    this.name = name;
    this.Details = Details;
  }

  // messageError
    messageError=(Message) => {
      this.Message = Message;
    }

    // messageErrorDescripation
    messageErrorDescripation=(name, MessageDescripation) => {
      this.MessageDescripation = MessageDescripation;
      this.name = name;
      this.updateDetails(name, MessageDescripation);
    }

  // get Detail by id
  getDetails=(id) => {
    this.id = id;
    axios
      .get(`/items/${id}`)
      .then((data) => {
        const result = data.data;
        const { Description, Name } = result;
        if (Description) {
          this.updateDetails(Name, Description);
        } else {
          this.messageErrorDescripation(Name, 'No Description this item');
          // this.updateDetails(Name, this.MessageDescripation);
        }
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 500) {
          this.messageError('Internal Server Error');
        }
      });
  }
}

decorate(Store, {
  itemlist: observable,
  Details: observable,
  name: observable,
  Message: observable,
  MessageDescripation: observable,
  updateList: action,
  updateDetails: action,
  getDetails: action,
  messageError: action,
});

export default new Store();
