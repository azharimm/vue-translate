<template>
    <Container class="mt-5">
        <Row>
            <div class="col-md-6 offset-6">
                <form action>
                    <div class="row">
                        <div
                            class="col"
                            v-if="!is_loading && !is_error && result"
                        >
                            <button
                                class="btn btn-sm btn-primary float-right"
                                @click.prevent="copy"
                            >
                                <i class="fas fa-copy"></i> Copy
                            </button>
                            <button
                                class="btn btn-sm btn-warning mr-2 float-right"
                                @click.prevent="saved"
                            >
                                <i class="far fa-star"></i> Save
                            </button>
                        </div>
                        <div class="col">
                            <select
                                class="form-control"
                                v-model="to"
                                @change="changeLanguage"
                            >
                                <option
                                    :value="list.code"
                                    v-for="list in to_list"
                                    :key="list.code"
                                    >{{ list.name }}</option
                                >
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
                                <label for="text"
                                    >Text: (Detected automatically)</label
                                >
                                <textarea
                                    v-model="text"
                                    class="form-control"
                                    cols="30"
                                    @keyup="changeText"
                                    rows="5"
                                ></textarea>
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
                                <div
                                    style="background: rgb(239 239 239); min-height: 135px;"
                                >
                                    <p
                                        v-if="is_loading"
                                        style="padding: 2px 3px;"
                                    >
                                        . . .
                                    </p>
                                    <p
                                        v-if="is_error"
                                        style="padding: 2px 3px;"
                                    >
                                        <b>Something went wrong!</b>
                                    </p>
                                    <p
                                        v-if="
                                            !is_loading && !is_error && result
                                        "
                                        ref="result"
                                        style="padding: 2px 3px;"
                                    >
                                        {{ result }}
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Row>
    </Container>
</template>

<script>
import axios from "axios";
import Container from "../components/Container";
import Row from "../components/Row";

import api from "../api";
import list from "../list";
export default {
    components: {
        Container,
        Row,
    },
    data() {
        return {
            text: "",
            result: "",
            to: "id",
            to_list: list,
            is_loading: false,
            is_error: false,
            cancelSource: null,
            savedTranslation: [],
        };
    },
    mounted() {
        console.log("Oh, Hi there! ✋");
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.fetchData(next);
        });
    },
    methods: {
        changeText() {
            if (this.text != "") {
                this.is_loading = true;
                this.is_error = false;
                this.translate();
            } else {
                this.result = "";
            }
        },
        async translate() {
            try {
                this.cancelTranslate();
                this.cancelSource = axios.CancelToken.source();
                const result = await api.get(
                    `?engine=google&text=${this.text}&to=${this.to}`,
                    {
                        cancelToken: this.cancelSource.token,
                    }
                );
                this.is_loading = false;
                this.result = result.data.data.result;
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 500) {
                        this.is_error = true;
                        this.is_loading = false;
                    }
                }
            }
        },
        changeLanguage() {
            if (this.text != "" && this.text != null) {
                this.is_loading = true;
                this.is_error = false;
                this.translate();
            }
        },
        copy() {
            let self = this;
            this.$copyText(this.result).then(
                function() {
                    self.$swal("Text copied!");
                },
                function() {
                    self.$swal("Failed to copy text!");
                }
            );
        },
        saved() {
            this.savedTranslation.unshift({
                id: Date.now().toString(),
                origin: this.text,
                result: this.result,
            });

            localStorage.setItem(
                "savedTranslation",
                JSON.stringify(this.savedTranslation)
            );
            this.fetchData();
            this.$swal({
                icon: "success",
                title: "Success",
                text: "Text saved!",
            });
        },
        fetchData() {
            if (localStorage.getItem("savedTranslation")) {
                this.savedTranslation = JSON.parse(
                    localStorage.getItem("savedTranslation")
                );
            }
        },
        cancelTranslate() {
            if (this.cancelSource) {
                this.cancelSource.cancel();
            }
        },
    },
};
</script>
