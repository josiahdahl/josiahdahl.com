import React, { Component } from "react";
import { NetlifyForm } from "./NetlifyForm";
import { Input, Label, Textarea } from "../index";
import { Button } from "../../Button";

class Form extends Component {
  render() {
    return (
      <NetlifyForm action="/thanks" name="contact" onSubmit={() => {}}>
        <Label htmlFor="firstName">First Name</Label>
        <Input type="text" required name="firstName" id="firstName"/>
        <Label htmlFor="lastName">Last Name</Label>
        <Input type="text" required name="lastName" id="lastName"/>
        <Label htmlFor="email">Email</Label>
        <Input type="email" required name="email" id="email"/>
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea type="text" name="message" id="message" rows="5"/>
        <Button type="submit">Submit</Button>
      </NetlifyForm>
    );
  }
}

export const ContactForm = Form;