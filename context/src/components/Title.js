import { useReducer } from "react";

const initialState = {
    username: '',
    password: '',

};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        default:
            return state;
    }
}

function LoginForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = e => {
        e.preventDefault();
        if (!state.username || !state.password) {
            dispatch({ type: 'SET_USERNAME', payload: 'لطفا فیلدها رو پر کنید' });

        } else {
            dispatch({ type: 'SET_USERNAME', payload: '' });
            alert(alert(`خوش آمدی ${state.username}`));

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={state.username}
                onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={state.password}
                onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
            />

            <button type="submit">Login</button>
        </form>
    );
}
export default LoginForm;
