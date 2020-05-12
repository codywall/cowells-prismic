import React from 'react';
import { navigate } from 'gatsby-link'
import Intro from '../../components/Intro'
import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import colors from '../../styles/colors'


const Form = styled('form')`
  margin:0 auto;
  padding:30px;
  width:400px;
  height:auto;
  overflow:hidden;
  background:white;
  border-radius: 8px;
  label {
    font-size:14px;
    color:darkgray;
    cursor:pointer; 
  }
  input, textarea {
    font-size: 1.1rem;
    margin:20px 0;
    padding:15px 10px;
    width:100%;
    outline:none;
    border:1px solid #bbb;
    border-radius:8px;
    display:inline-block;
    box-sizing: border-box;
  }
  button {
    border-radius: 5px;
    padding:15px 50px;
    width:auto;
    background:${colors.cyan700};
    border:none;
    color:white;
    cursor:pointer;
    display:inline-block;
    font-size: 1rem;
  }
}
`

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
  export default class Index extends React.Component {
    constructor(props) {
      super(props)
      this.state = { isValidated: false }
    }
  
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }
  
    render() {
      return (
        <Layout>
                <Intro title="Contact Us"
                text="Please fill out this form with your inquiry and we will get back to you as soon as possible." />
                <Form
                  name="contact-form"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      Send
                    </button>
                  </div>
                </Form>
        </Layout>
      )
    }
  }