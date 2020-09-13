<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">Vue Translate</a>
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
						<a class="nav-link" href="#">
							Home
						</a>
					</li>
					<li class="nav-item active">
						<a class="nav-link" href="#">
							Saved
						</a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="container mt-5">
			<div class="row">
				<div class="col-md-6 offset-6">
					<form action>
						<div class="row">
							<div class="col">
								<button class="btn btn-sm btn-primary float-right">
									<i class="fas fa-copy"></i> Copy
								</button>
								<button class="btn btn-sm btn-warning mr-2 float-right">
									<i class="far fa-star"></i> Save
								</button>
							</div>
							<div class="col">
								<select class="form-control">
									<option value="en">English</option>
									<option value="en">Indonesia</option>
								</select>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="row mt-2">
				<div class="col-md-6">
					<div class="card">
						<div class="card-body">
							<form action>
								<div class="form-group">
									<label for="text">Text: (Detected automatically)</label>
									<textarea class="form-control" cols="30" rows="5"></textarea>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-body">
							<form action>
								<div class="form-group">
									<label for="text">Translated Text:</label>
									<textarea class="form-control" cols="30" readonly rows="5"></textarea>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
};
</script>

<style>
</style>
