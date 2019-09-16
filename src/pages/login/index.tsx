import * as React from 'react';
import { connect } from 'react-redux';

import Page from '../../components/layout/Page';

import { ConnectedReduxProps } from '../../store';

interface PropsFromState {
}

interface PropsFromDispatch {
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

class LoginPage extends React.Component<AllProps> {
  constructor(props: AllProps) {
    super(props);

    this.state = {
      login: undefined,
      password: undefined
    };
  }

  public render() {
    return (
      <Page>
        <form>
          <fieldset>
            <label htmlFor="login">Login</label>
            <input id="login" name="login" type="text"/>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Login</label>
            <input id="password" name="password" type="password"/>
          </fieldset>
          <button type="button">Login</button>
        </form>
      </Page>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
