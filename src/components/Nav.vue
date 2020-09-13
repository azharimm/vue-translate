<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link tag="a" class="navbar-brand" to="/">
			<img
				src="https://cdn4.iconfinder.com/data/icons/materia-flat-basic-vol-2/24/009_094_translator_translate_letter_hieroglyph-256.png"
				width="30"
				height="30"
				alt
			/>
			Traduire
		</router-link>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<router-link tag="a" class="nav-link" to="/">Home</router-link>
				</li>
				<li class="nav-item active">
					<router-link tag="a" class="nav-link" to="/saved">Saved</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>