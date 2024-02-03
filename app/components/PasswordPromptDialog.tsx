// components/PasswordPromptDialog.tsx
"use client";

import React, { useState } from "react";

const PasswordPromptDialog = ({ onSubmit }) => {
	const [password, setPassword] = useState("");
	const [passwordIncorrect, setPasswordIncorrect] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		const onSubmit = async (e: React.FormEvent) => {
			e.preventDefault();
			setLoading(true);
			const request = await fetch(`/api`, {
				body: JSON.stringify({ password }),
				headers: { "Content-Type": "application/json" },
				method: "post",
			});
		};

		if (request.status !== 200) {
			setPasswordIncorrect(true);
			setLoading(false);
		} else {
			window.location.reload();
		}
	};

	return (
		<div className="password-prompt-dialog">
			<form onSubmit={handleSubmit}>
				<label htmlFor="password">Password:</label>
				<input
					type="text"
					id="password"
					value={password}
					className="bg-neutral-500 text-neutral-100"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default PasswordPromptDialog;
