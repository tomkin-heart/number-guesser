'use client'
import {useState} from 'react'

export default function () {
	let [getUserChoice, setUserChoice] = useState(0)
	let [compChoice, setCompChoice] = useState(0)
	let [targetNum, setTargetNum] = useState(0)
	const [result, setResult] = useState('')
	const [getButtonState, setButtonState] = useState(true)
	let [getRound, setRound] = useState(1)
	let [getCompScore, setCompScore] = useState(0)
	let [getUserScore, setUserScore] = useState(0)
	let [getGameResult, setGameResult] = useState()

	const countUp = e => {
		setUserChoice(getUserChoice == 9 ? getUserChoice : getUserChoice + 1)
	}
	const countDown = e => {
		setUserChoice(getUserChoice == 0 ? getUserChoice : getUserChoice - 1)
	}

	const generate_random_number = () => Math.floor(Math.random() * 10)

	const makeGuess = () => {
		const compRandom = generate_random_number()
		setCompChoice(compRandom)
		const targetRandom = generate_random_number()
		setTargetNum(targetRandom)
		// evaluate the game result
		const userDiff = Math.abs(targetRandom - getUserChoice)
		const compDiff = Math.abs(targetRandom - compRandom)

		if (userDiff - compDiff == 0) {
			setResult("it's a draw...")
		} else if (userDiff - compDiff < 0) {
			setResult('you won!!!')
			setUserScore(getUserScore + 1)
		} else {
			setResult('computer won...')
			setCompScore(getCompScore + 1)
		}

		if (getRound == 10) {
			if (getUserScore - getCompScore == 0) {
				setGameResult(
					"Game Over. It's a draw, You are equally strong! Watch out, Human!"
				)
			} else if (getUserScore - getCompScore <= 0) {
				setGameResult(
					'Game Over. Computers are winning! Haa haaa haaaaaaa'
				)
			} else {
				setGameResult(
					'Game Over. You are still the most clever creature on Earth, but watch out! Wuuuuuuuu!'
				)
			}
		} else {
			setRound(getRound + 1)
		}

		setButtonState(false)

		// setResult(
		// 	userDiff - compDiff == 0
		// 		? "it's a draw"
		// 		: userDiff - compDiff < 0
		// 		? 'you won!'
		// 		: 'computer won'
		// )
	}

	const nextRound = () => {
		setButtonState(true)
		setUserChoice(0)
		setCompChoice(0)
		setTargetNum(0)
	}

	return (
		<div className='flex flex-col text-center gap-10 pt-10 pl-10 pr-10 pb-[64px] justify-center'>
			<h1 className='header'>Number Guesser</h1>
			<div>
				<h3>Round {getRound}</h3>
				<div>Target Number: {targetNum}</div>
			</div>
			<div className='flex flex-row justify-center gap-01'>
				<div className='bg-sa p-10 rounded-10 w-40'>
					<div>Computer</div>
					<div className='text-01'>Score: {getCompScore}</div>
					<br />
					<h2 className='font-bold'>{compChoice}</h2>
				</div>
				<div className=' bg-sa p-10 rounded-10 w-40'>
					<div>You</div>
					<div className='text-01'>Score: {getUserScore}</div>
					<br />
					<h2 className='font-bold'>{getUserChoice}</h2>
					<div className='flex justify-center gap-03'>
						<button
							onClick={countDown}
							className='btn !rounded-[0px] !rounded-bl'
						>
							-
						</button>
						<button
							onClick={countUp}
							className='btn !rounded-[0px] !rounded-tr'
						>
							+
						</button>
					</div>
					<br />
					<button
						onClick={makeGuess}
						disabled={!getButtonState}
						className='btn primary'
					>
						Make a Guess
					</button>
				</div>
			</div>
			{result != '' && <div className='text-active'>{result}</div>}
			<div className='text-center'>
				<button onClick={nextRound} className='btn'>
					Next Round
				</button>
			</div>
			<div>
				<h3 className='font-bold'>{getGameResult}</h3>
			</div>
		</div>
	)
}
