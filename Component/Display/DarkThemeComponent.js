
import st from './DarkThemeComponent.module.css';

function DarkThemeComponent() {
  return (
    <div className={st.darkBack}>

      <div className={st.darkNav}>
        <span className={st.darkNavMint}>Nav-Bar</span>
      </div>

      <div className={st.darkPlate}>
        <div className={st.darkModuleBack}>
          <div className={st.darkModuleTitle}>제목</div>
          <div>내용</div>

        </div>
      </div>
    </div>
  )
}

export default DarkThemeComponent;