import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {
      _id: "63043046432f9033d45410e1",
      id: "49338012",
      picture_url:
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/106cccfe-0694-49e6-ab93-168276cd63b2.jpeg?aki_policy=large",
      picture_urls: [
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/106cccfe-0694-49e6-ab93-168276cd63b2.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/39adb170-7513-4357-8f2c-20b2da0e6a6c.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/1d89f0f0-b6a6-4e30-9460-3a20a0cd3a2d.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/eaa622ad-9e25-4492-9581-3f3ca9f5c784.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/a49dc3ae-fa48-40c2-8f33-7bb911097637.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/22620ee7-52cb-43b7-b30d-5223b22c8346.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/03f50602-c939-4a28-b4b5-53dea52845d6.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/f4528890-9d05-4494-a2b5-2fa9fdb0bb20.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/083cf207-12a9-4933-9c05-b08ad33d5c68.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/cd3a7309-2c0f-4cda-8174-c211a75e878b.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/1b9e3ba6-688f-4260-b630-176fb7b2ff69.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/b2e66562-07da-4c55-bc64-ed4106384a06.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/c8f1d3b2-62bb-4066-bf9c-fbe57ed785fb.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/099b9749-e47e-46a8-b1ab-33305874dde6.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/e656aa7b-0dab-40d0-ae7c-737b4298f3ae.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/7c5ccce4-7861-44dc-afb3-fe5bf9f846e5.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/b538dba7-41de-458c-918c-96dd43fed611.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/db2df65c-0633-4e74-bb07-a54d9092c7c5.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/d9645cd3-ea15-45cf-922a-29bdfc10eb59.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/79e21870-5e7a-4be7-9d3d-a314b778a1b0.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/9addc599-a555-4ff0-a342-0cae263d2838.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/7a6e3b02-6358-4675-819d-65e843608537.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49338012/original/14a50754-97fb-463a-896f-2c5aa6c1308d.jpeg?aki_policy=large",
      ],
      verify_info: {
        messages: ["整套公寓型住宅", "1室1卫1床"],
        text_color: "#767676",
      },
      name: "【轻奢投影房&壹房贰人】番禺天河城购物中心~万达广场/长隆欢乐世界~南村万博地铁站/大学城近3站",
      price: 370,
      price_format: "￥370",
      star_rating: 5,
      star_rating_color: "#FF5A5F",
      reviews_count: 64,
      reviews: [
        {
          comments: "所有东西都超级棒的。推荐推荐！",
          created_at: "2022-07-02T00:00:00Z",
          is_translated: false,
          localized_date: "2022年7月",
          reviewer_image_url:
            "https://a0.muscache.com/im/pictures/user/fd0f7699-30a3-48fa-85d3-017a3fbdc34b.jpg?aki_policy=x_medium",
          review_id: 661754214766647900,
        },
      ],
      bottom_info: null,
      lat: 23.01067,
      lng: 113.34541,
      image_url: "/moreitems/7de6bc9ea2b6bc783c5b4cb0aa808408.jpg",
    },
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload;
    },
  },
});

export const { changeDetailInfoAction } = detailSlice.actions;
export default detailSlice.reducer;
