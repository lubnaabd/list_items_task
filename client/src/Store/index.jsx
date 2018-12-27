
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

  // update Detail
  upDetails=(Details) => {
    this.Details = Details;
  }

  // messageError
    messageError=(Message) => {
      this.Message = Message;
    }

    // messageErrorDescripation
    messageErrorDescripation=(MessageDescripation) => {
      this.MessageDescripation = MessageDescripation;
      this.upDetails(MessageDescripation);
    }

  // get Detail by id
  getDetails=(id) => {
    this.id = id;
    axios
      .get(`/items/${id}`)
      .then((data) => {
        const result = data.data;
        const { Description } = result;
        if (Description) {
          this.upDetails(Description);
        } else {
          this.messageErrorDescripation('No Description this item');
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
  Message: observable,
  MessageDescripation: observable,
  updateList: action,
  upDetails: action,
  getDetails: action,
  messageError: action,
});

export default new Store();
