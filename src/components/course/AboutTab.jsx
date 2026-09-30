import { keyPoints } from "../../data";

export default function AboutTab() {
  return (
    <div>
      <h3>Description</h3>
      <p className="para">Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.</p>
      <p className="para">In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p>
      <p className="para">As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.</p>

      <h3>Sneak Peak</h3>
      <div className="sneak">
        {[1, 2, 3, 4].map((n) => <img key={n} src={`/images/sneak${n}.jpg`} alt={`Sneak peek ${n}`} />)}
      </div>

      <h3>Key Points</h3>
      <ul className="key-points">
        {keyPoints.map((k) => <li key={k}>{k}</li>)}
      </ul>
    </div>
  );
}