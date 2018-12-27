import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import axios from 'axios';
import './itemList.css';

class ItemList extends Component {
  state = { }

  // get all name when render the page and put result in itemlist by function updateList
  // and put first descrition in detail by function updateDetails
  componentDidMount() {
    const { store } = this.props;
    axios
      .get('/items')
      .then((data) => {
        const result = data.data;
        if (result.length) {
          const { Description, Name } = result[0];
          if (Description) {
            store.updateDetails(Name, Description);
          } else {
            // store.updateDetails(Name);
            store.messageErrorDescripation(Name, 'No Description this item');
          }
          store.updateList(result);
        } else {
          store.messageError('No found data !!!');
        }
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 204) {
          store.messageError('There are no Description !!!!');
        }
        if (status === 500) {
          store.messageError('Internal Server Error !!!');
        }
        if (status === 404) {
          store.messageError(' Server Error !!!');
        }
        if (status === 400) {
          store.messageError(' Bad request !!!');
        }
      });
  }
  // When itemlist not empty can map of itemlist and returns name , id
  // when click any name of list can you whatch  Details this name by function store.getDetails

  render() {
    const { store } = this.props;
    if (store.Message) {
      return <h1 className="item__message-error">{ store.Message}</h1>;
    }
    return (
      <div className="item">
        <div>
          <ul className="item__box">
            {store.itemlist && store.itemlist.map((element) => {
              const {
                Name, id,
              } = element;
              return (
                <li
                  className="item__box--card"
                  key={id}
                  onClick={
                  () => { store.getDetails(id); }
                  }
                >
                  <div>{Name}</div>
                </li>
              );
            }) }
          </ul>
        </div>
        <div className="item__box--descripation">
          <h1>
            {store.name}
          </h1>
          {store.Details}
        </div>
      </div>
    );
  }
}
ItemList.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};
export default observer(ItemList);
