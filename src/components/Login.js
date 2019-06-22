import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return( 
        <div class="container bg-gradient-primary">

                {/* <!-- Outer Row --> */}
            <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div class="row">
                    <div class="col-lg-6 d-none d-lg-block ">
                        <img src="" alt=""></img>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <form class="user">
                            <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                            </div>
                            <div class="form-group">
                            <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                            </div>
                            <div class="form-group">
                            <div class="custom-control custom-checkbox small">
                                <input type="checkbox" class="custom-control-input" id="customCheck" />
                                <label class="custom-control-label" for="customCheck">Remember Me</label>
                            </div>
                            </div>
                            <Link class="btn btn-primary btn-user btn-block" to="/lista-de-certificados">Login</Link>
                            
                            
                            
                            <hr />
                            <Link class="btn btn-google btn-user btn-block" to="/lista-de-certificados">
                            <i class="fab fa-google fa-fw"></i> Login with Google</Link>
                           
                            <Link class="btn btn-facebook btn-user btn-block" to="/lista-de-certificados">
                            <i class="fab fa-facebook fa-fw"></i> Login with Facebook</Link>
                           
                        </form>
                        <hr />
                        <div class="text-center">
                        <Link class="small" to="/forgot-password">Olvidaste tu contraseña?</Link>
                           
                        </div>
                        <div class="text-center">
                        <Link class="small" to="/registro">Crear un cuenta!</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>

            </div>

        </div>
    );  
}

export default Login;
