import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import { LoginStepOne } from '../pages/login-step-one'
import { LoginStepTwo } from '../pages/login-step-two'

const App: React.FC = () => {
    return (
        <Router>
            <header className="h-20 bg-primary flex items-center p-4">
                <h1 className="text-3xl text-black">Title</h1>
            </header>

            <main className="flex flex-col p-4 h-full">
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login/step-1" />
                    </Route>
                    <Route path="/login/step-1" component={LoginStepOne} />
                    <Route path="/login/step-2" component={LoginStepTwo} />
                </Switch>
            </main>
        </Router>
    )
}

export { App }
