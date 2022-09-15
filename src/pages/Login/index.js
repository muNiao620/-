import {Card} from 'antd'
import logo from '../../assets/logo.png'
import './index.scss'
function Login(){
  return (
    <div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt=''/>
      </Card>
    </div>
  )
}
export default Login