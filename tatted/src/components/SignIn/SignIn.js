import React from "react";
import "./SignIn.css";

const SignIn = () => (
    <button onclick="document.getElementById('id02').style.display='block'" style="width:auto;">Sign Up</button>

                                <div id="id02" class="modal2">
                                    <span onclick="document.getElementById('id02').style.display='none'" class="close2" title="Close Modal">&times;</span>
                                    <form class="modal-content2" action="/auth/sign-up" method="post">
                                        <div class="container">
                                            <h1>Sign Up</h1>
                                            <p>Please fill in this form to create an account.</p>
                                            <hr/>
                                            <label for="email">
                                                <b>Email</b>
                                            </label>
                                            <input type="text" placeholder="Enter Email" name="email" required/>

                                            <input type="text" name="username" placeholder="Username" required/>

                                            <label for="password">
                                                <b>Password</b>
                                            </label>
                                            <input type="password" placeholder="Enter Password" name="password" required>

                                            <label for="passwordConf">
                                                <b>Repeat Password</b>
                                            </label>
                                            <input type="password" placeholder="Confirm Password" name="passwordConf" required>

                                            <label>
                                                <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
                                            </label>

                                            <p>By creating an account you agree to our
                                                <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

                                            <div class="clearfix">
                                                <button type="submit" value="" class="signupbtn">Sign Up</button>
                                                <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn2">Cancel</button>

                                            </div>
                                        </div>
                                    </form>
                                </div>

                                                    )

export default SignIn;