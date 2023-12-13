import './LandingPage.scss'
import { DiGithubBadge } from 'react-icons/di'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { Outlet, Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="App">
      <div className="TopLeftBorder"></div>
      <div className="TopRightContainer">
        <a className="NavButton" href={'https://github.com/Jiajunn'}>
          <DiGithubBadge style={{ fontSize: '3.5em', color: '#d3d3d3' }} />
        </a>
        <a
          className="NavButton"
          href={'https://www.linkedin.com/in/lin-jiajun-b8a1591aa/'}
        >
          <BiLogoLinkedinSquare
            style={{ fontSize: '3.5em', color: '#d3d3d3' }}
          />
        </a>
      </div>
      <div className="MainContainer">
        <div className="LeftContainer">
          <p className="Title">Welcome.</p>
          <p>
            Hello, I'm Lin Jiajun, an aspiring software engineer based in
            Singapore with a passion for crafting innovative solutions. I
            specialize in front-end development and have a diverse project
            portfolio that showcases my dedication to creating impactful
            applications.
          </p>
          <pre></pre>
          <p>
            From developing a user-friendly phone app, ParkWhere, designed to
            assist drivers in finding parking spots efficiently, to creating a
            seamless Dutch auction on the solidity blockchain, my projects
            reflect my commitment to building intuitive and effective solutions.
          </p>
          <p>
            While my primary role has been as a front-end engineer, I'm on a
            journey to become a full-stack developer. I thrive on challenges and
            constantly seek opportunities to broaden my skill set.
          </p>
          <pre></pre>
          <p>
            I'm excited about the possibilities that lie ahead in the world of
            software development. Explore my projects, and feel free to reach
            out if you share a passion for innovation and collaboration.
          </p>
        </div>
        <div className="RightContainer">
          <p className="Subheading"> Projects</p>
          <nav>
            <ul className="ProjectList">
              <li>
                <Link to={`FoodBuddy`}>FoodBuddy</Link>
              </li>
              <li>
                <Link to="DutchAuction">DutchAuction</Link>
              </li>
              <li>
                <Link to="ParkWhere">ParkWhere</Link>
              </li>
              <li>
                <Link to="MDP">MDP</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="BotRightBorder"></div>
      <Outlet />
    </div>
  )
}
