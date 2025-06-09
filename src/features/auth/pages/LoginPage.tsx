import React, {useCallback, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { LoginForm } from '../components/LoginForm';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const loginMutation = useLogin();

    useEffect(() => {
        if(loginMutation.isSuccess) {
            navigate('/user-dashboard');
        }
    }, [loginMutation.isSuccess, navigate]);

    const handleLogin = useCallback(({ email, password} : { email: string; password: string }) => {
        loginMutation.mutate({ email, password});
    }, [loginMutation])

    return (
        <LoginForm 
            onLogin={handleLogin} 
            isLoading={loginMutation.isPending}
            error={loginMutation.error}
        />
)
    
};

export default LoginPage;