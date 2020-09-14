<template>
	<Container class="mt-5">
		<Row>
			<div class="col-12 col-md-12">
				<div class="card">
					<div class="card-header">
						<h2>Saved Translation</h2>
					</div>
					<div class="card-body">
						<table class="table table-hover" v-if="savedTranslation.length">
							<thead>
								<th>#</th>
								<th>Original Text</th>
								<th>Translated Text</th>
								<th></th>
							</thead>
							<tbody>
								<tr v-for="(text, index) in savedTranslation" :key="text.id">
									<td>{{index+1}}</td>
									<td>{{text.origin}}</td>
									<td>{{text.result}}</td>
									<td>
										<button class="btn btn-sm btn-danger" @click.prevent="deleteData(text.id)">Delete</button>
									</td>
								</tr>
							</tbody>
						</table>
                        <div v-else>
                            <center><h3>No saved translation, maybe save one?</h3></center>
                        </div>
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
	data() {
		return {
			savedTranslation: [],
		};
	},
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			vm.fetchData(next);
		});
	},
	methods: {
		fetchData() {
			if (localStorage.getItem("savedTranslation")) {
				this.savedTranslation = JSON.parse(
					localStorage.getItem("savedTranslation")
				);
			}
		},
		deleteData(id) {
			let self = this;
			this.$swal({
				title: "Do you want to delete this data?",
				showDenyButton: true,
				showCancelButton: true,
				confirmButtonText: `Delete`,
				denyButtonText: `Don't save`,
			}).then((result) => {
				if (result.isConfirmed) {
					this.savedTranslation = this.savedTranslation.filter(
						(sv) => sv.id !== id
					);
					localStorage.setItem(
						"savedTranslation",
						JSON.stringify(this.savedTranslation)
					);
					self.$swal("Deleted!", "", "success");
				}
			});
		},
	},
};
</script>