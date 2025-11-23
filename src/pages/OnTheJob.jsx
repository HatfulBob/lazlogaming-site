import Layout from '../components/Layout';

function OnTheJob() {
  return (
    <Layout>
      <h2>On the Job</h2>
      <p><i>&quot;Get In, Get Out, Get Paid!&quot;</i></p>
      <img src={`${import.meta.env.BASE_URL}otj.png`} width="60%" alt="On The Job Logo" />
      <p>That&apos;s The Agent&apos;s motto, and that is exactly what you do in this turn-based roguelite stealth game!</p>
      <p>In On The Job, you control The Agent, and it is your mission to sneak your way through many dangerous levels to get all the documents from dastardly secret organizations.</p>
      <p>There are many obstacles and guards in your way so it won&apos;t be easy, but it&apos;s all about how much risk you can take before you leave with that big payday!</p>
      <h4>Features:</h4>
      <ul>
        <li>Endless levels that constantly challenge you in various ways.</li>
        <li>Fun upgrades to turn the tide in your favor.</li>
        <li>Different guard types to change things up.</li>
        <li>Cool achievements to unlock to show how cool you are.</li>
        <li>Multiple agents to play as with wildly different playstyles.</li>
        <li>And more things to come!</li>
      </ul>
      <h2><a href="https://store.steampowered.com/app/2327600/On_The_Job/" target="_blank" rel="noopener noreferrer">Purchase now on Steam!</a></h2>
    </Layout>
  );
}

export default OnTheJob;
