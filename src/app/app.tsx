import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import { LoginStepOne } from '../pages/login-step-one'
import { LoginStepTwo } from '../pages/login-step-two'
import { AppRoutes } from '../shared/constants'

const App: React.FC = () => {
    return (
        <Router>
            <header className="h-20 bg-primary flex items-center p-4">
                <h1 className="text-3xl text-black">Title</h1>
            </header>

            <main className="flex flex-col p-4 h-full">
                <Switch>
                    <Route exact path={AppRoutes.ROOT}>
                        <Redirect to={AppRoutes.LOGIN_STEP_ONE} />
                    </Route>
                    <Route path={AppRoutes.LOGIN_STEP_ONE} component={LoginStepOne} />
                    <Route path={AppRoutes.LOGIN_STEP_TWO} component={LoginStepTwo} />
                </Switch>
            </main>
        </Router>
    )
}

export { App }
