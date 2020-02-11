import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}

class Home extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class Noticications extends React.Component {
  render() {
    category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class Messages extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class SearchInput extends React.Component {
  render() {
    return(
      <form>
        <input type="text" placeholder="Search...." />
      </form>
    );
  }
}

class Tweet extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class TopRow extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.topBox.forEach((topBox) => {
      if (topBox.category !== lastCategory) {
        rows.push(
          <Home
            category={home.category}
            key={home.name} />
        );
        rows.push(
          <Noticications
            notifications={notifications}
            key={notifications.name} />
        );
        rows.push(
          <Messages
            messages={messages}
            key={messages.name} />
        );
        rows.push(
          <SearchInput
            searchInput={searchInput}
            key={searchInput.name} />
        );
        rows.push(
          <Tweet
            tweet={tweet}
            key={tweet.name}  />
        );
        
        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        );
      }
    })
  }
}

class Background extends React.Component {
  render() {
    return (
      <div>
        <TopRow />
        // <Home />
        // <Notifications />
        // <Messages />
        // <SearchInput />
        // <Tweet />
      </div>
    )
  }
}
