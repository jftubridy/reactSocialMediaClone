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

class PersonRow extends React.component {
  render() {
    const.category = this.props.category;
    return(
      <tr>
        <th colSpan="2">
        </th>
      </tr>
    );
  }
}

class PersonPost extends ReactComponent {
  render() {
    const name = person.name;
    const post = this.props.post;
  }
}

class PostTable extends React.Component {
  render () {
    const rows = [];
    let lastCategory = null;

    this.props.post.forEach((post) => {
      if (post.category !== lastCategory) {
        rows.push(
          <PersonRow
            category={post.category}
            key={post.category} />
        );
      }
      rows.push (
        <PersonPost
          post={post}
          key={post.name} />
      );
      lastCategory = post.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
          </tr>
        </thead>
      </table>
    );
  }
}
