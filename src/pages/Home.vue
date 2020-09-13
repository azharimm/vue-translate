<template>
	<Container class="mt-5">
		<Row>
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
		</Row>
		<Row class="mt-2">
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
		</Row>
	</Container>
</template>

<script>
import Container from "../components/Container";
import Row from "../components/Row";
export default {
	components: {
		Container,
		Row,
	},
};
</script>