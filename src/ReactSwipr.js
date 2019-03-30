import React, { Component } from "react"
import PropTypes from "prop-types"
import swipr from "swipr"
import style from "./swipr.css"

/**
 * React Swipr component
 **/
export default class Swipr extends Component {
  static get propTypes() {
    return {
      elementId: PropTypes.string.isRequired,
      navigation: PropTypes.bool
    }
  }

  componentDidMount() {
    const { elementId } = this.props

    document.addEventListener("DOMContentLoaded", function() {
      const $elem = document.getElementById(elementId)
      swipr($elem)
    })
  }

  render() {
    const { navigation, elementId } = this.props

    return (
      <div className='react-swipr' id={elementId}>
        <div className='swipr'>
          <ul className='swipr_slides'>{this.props.children}</ul>
        </div>
        {navigation && (
          <React.Fragment>
            <span className='swipr_prev'>
              <svg width='50' height='50' viewBox='0 0 501.5 501.5'>
                <g>
                  <path
                    fill='currentColor'
                    d='M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z'
                  />
                </g>
              </svg>
            </span>
            <span className='swipr_next'>
              <svg width='50' height='50' viewBox='0 0 501.5 501.5'>
                <g>
                  <path
                    fill='currentColor'
                    d='M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z'
                  />
                </g>
              </svg>
            </span>
          </React.Fragment>
        )}
      </div>
    )
  }
}
