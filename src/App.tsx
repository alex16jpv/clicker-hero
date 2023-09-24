import HealthBar from "./components/HealthBar";
import { useStats } from "./hooks/useStats";

function App() {
  const state = useStats();

  return (
    <main className="w-[50%] m-auto">
      {/* TODO: remove this section after testing */}
      <section>
        <h2 className="text-center text-2xl">Testing Stats logic</h2>
        <article className="flex flex-row justify-around mt-5 mb-10 flex-wrap gap-3">
          <button
            className="border-solid border-2 border-red-600 p-2"
            onClick={() => {
              state.incrementClickDamage(1);
            }}
          >
            Increment click damage
          </button>

          <button
            className="border-solid border-2 border-red-600 p-2"
            onClick={() => {
              state.incrementAutoClickDamage(1);
            }}
          >
            Increment auto click damage
          </button>

          <button
            className="border-solid border-2 border-red-600 p-2"
            onClick={() => state.incrementClickMultiplier(1)}
          >
            Increment click damage multiplier
          </button>

          <button
            className="border-solid border-2 border-red-600 p-2"
            onClick={() => state.incrementAutoClickMultiplier(1)}
          >
            Increment auto click damage multiplier
          </button>

          <button
            className="border-solid border-2 border-red-600 p-2"
            onClick={() => state.incrementGlobalMultiplier(1)}
          >
            Increment global damage multiplier
          </button>
        </article>
      </section>

      <section>
        <h2 className="text-center text-2xl">Stats</h2>
        <article className="flex justify-around [&>div>h3]:border-solid [&>div>h3]:border-red-600 [&>div>h3]:border-b-2">
          <div>
            <h3>Click Damage</h3>
            <ol>
              <li>Click Damage: {state.stats.clickDamage}</li>
              <li>Total Click Damage: {state.clickDamage}</li>
            </ol>
          </div>
          <div>
            <h3>Auto Click Damage</h3>
            <ol>
              <li>Auto Click Damage: {state.stats.autoClickDamage}</li>
              <li>Total Auto Click Damage: {state.autoClickDamage}</li>
            </ol>
          </div>
          <div>
            <h3>Multipliers</h3>
            <ol>
              <li>Click Multiplier: {state.stats.clickMultiplier}</li>
              <li>Auto Click Multiplier: {state.stats.autoClickMultiplier}</li>
              <li>Idle Multiplier: {state.stats.idleDamageMultiplier}</li>
              <li>Global Multiplier: {state.stats.globalMultiplier}</li>
              <li></li>
            </ol>
            <p></p>
          </div>
        </article>
        <h2>{state.currentEnemy.name}</h2>
        <HealthBar
          health={state.currentEnemy.health}
          maxHealth={state.currentEnemy.maxHealth}
        />
      </section>
    </main>
  );
}

export default App;
