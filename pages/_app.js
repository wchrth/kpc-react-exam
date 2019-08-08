import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import withRedux from '../HOCs/withRedux'

class MyApp extends App {
  constructor(props) {
    super(props)
    this.persistor = persistStore(props.store)
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <PersistGate
            loading={<Component {...pageProps} />}
            persistor={this.persistor}
          >
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(MyApp)
