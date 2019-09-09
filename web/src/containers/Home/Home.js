import React, { Component } from 'react'
import { connect } from 'react-redux';

import { testAction } from '../../actions/testActions';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>App Ready</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    testState: state
})

export default connect(mapStateToProps, { testAction })(Home);