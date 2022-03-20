const ShopData=()=>{

    const data=[
        {
          id: 1,
          productImg: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/276069532_353994966766183_3221639006148477460_n.jpg?stp=c93.0.260.260a_dst-jpg_p261x260&_nc_cat=105&ccb=1-5&_nc_sid=843cd7&_nc_eui2=AeH1avpy-nQqVg4FE-2lOAWxfL_QwWQZ4fN8v9DBZBnh80mHsViZdIfL5UxoA_mbebPB-3V_Xe1wGAWs_87hTq_P&_nc_ohc=tksgSAHeD_0AX-VUgNz&_nc_ht=scontent.flhe13-1.fna&oh=00_AT8XAqwF-NvPbGuh4s-ug89Izm-0Il5lXHeNcdS7YkiJvg&oe=623B8CA8",
          name: "Mr Nano gaming",
          time: "2h"
        },
        {
          id: 2,
          productImg: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/274710393_317527710438512_4731336832396180723_n.jpg?stp=c0.95.672.672a_dst-jpg_s261x260&_nc_cat=109&ccb=1-5&_nc_sid=843cd7&_nc_eui2=AeEzqxet8SoS-XDH8AVAFN2MdkQjJ9Mtv5F2RCMn0y2_kbLoUNlAqHE4v2cc5eV75eRZamVOQlhP83YQiJULhrBq&_nc_ohc=_YwH6w32obcAX-q42Rq&_nc_ht=scontent.flhe13-1.fna&oh=00_AT_m0yjuqk5eB6BTl_Ll_kFOyawwfq_3a8pIoR_I1DFP0Q&oe=623AF654",
          name: "Angkor Monkey",
          time: "4h",
        },
        {
          id: 3,
          productImg: "https://scontent.flhe13-1.fna.fbcdn.net/v/t45.5328-4/275384782_5606212336072793_2866501888703614647_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=104&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeE8sh9t20y3tsTpWLECUjmocFq4ej8mkKhwWrh6PyaQqLSQDknYvoEaGyGGKerVVg66Zmx2G5bIIq5wP88frw9m&_nc_ohc=rc59Xr1rLVgAX_-X2ra&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-cnxzMkYV26hZgbeOBVioVjTIPehEl0COutioUHiFrZg&oe=623BB92A",
          name: "Genoy Gamers",
          time: "2h",
         
        },
        {
          id: 4,
          productImg: "https://scontent.flhe13-1.fna.fbcdn.net/v/t45.5328-4/275101268_4673121336130185_1609063197444949127_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=106&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeFb6CEDyDFfK_OIB8b4_D116-6mLMqWQ4zr7qYsypZDjO_MBnkJ7FCUJ5ye_0WY42Rob9fOdcPo7Xw_FQnd-QkR&_nc_ohc=v-oMWDFdS84AX_zp56G&tn=6IpoXWUln1yGOH_-&_nc_ht=scontent.flhe13-1.fna&oh=00_AT9iC7jETCX0awVxPrzaFwOieydokfVZmpqy8YjhOkjyUQ&oe=623B494E",
          name: "Ludo Club",
          time: "1h",
          
        },
        {
          id: 5,
          productImg:"https://scontent.flhe13-1.fna.fbcdn.net/v/t45.5328-4/276123880_5357998490891222_7045197091778134890_n.jpg?stp=c147.0.260.260a_dst-jpg_p261x260&_nc_cat=111&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeHZtiuwkGTjBfKyxWzMnVIZWuF7LR_33oxa4XstH_fejOXu_RXLZO5tNqRtMYGT0GXsEIKsthByAWGJb_bNziyz&_nc_ohc=4YCJSgVHwYsAX9uN_OQ&_nc_ht=scontent.flhe13-1.fna&oh=00_AT9v_xXulFz-6ExmqQypmfLerWiESpUR29_fvVurF6H_8A&oe=623BB9A0",
          name: "Ludo Club",
          time: "1h",
          
        },
          {
            id: 6,
            productImg:"https://scontent.flhe13-1.fna.fbcdn.net/v/t45.5328-4/274849455_4409513742482547_3228246690141841187_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=100&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeFTNSmGqlVA3rsva-Ak47Yt66RXNGIqMXvrpFc0YioxexiH7nbc5Srip5fH-iUssC8OizMPb3BkjB2J3QRSd76c&_nc_ohc=EOmgd0DVqr4AX8jkIey&_nc_ht=scontent.flhe13-1.fna&oh=00_AT_olXQY90eO-fkvVw-5BWNDaHHdSLUyIX8lHZRWYZMr_Q&oe=623B69D2",
            name: "Ludo Club",
            time: "1h",
            
          },
          {
            id: 7,
            productImg:"https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/272899423_3071597296412382_6449989088918643183_n.jpg?stp=c0.106.960.960a_dst-jpg_s261x260&_nc_cat=108&ccb=1-5&_nc_sid=843cd7&_nc_eui2=AeEMuC10C519lfExCXKzGpfb5T7ZZZimwGXlPtllmKbAZRIKln8kA_-XdyyP0WnHoVix8pF2IAZ6r_IkXmYUmlEq&_nc_ohc=3UMJAU-fXX4AX8S26ru&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-LU5obTBgr5aWUvMou80ZuWZl5tWiTJ5HGRqx5vdI-sg&oe=623B93C1",
            name: "Ludo Club",
            time: "1h",
            
          },
        {
            id: 8,
            productImg:"https://scontent.flhe13-1.fna.fbcdn.net/v/t45.5328-4/274324162_4874353359350847_3463549707982968857_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=105&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeHtIoGLssr8iC-psljAQlh8Rfe7PLtqFllF97s8u2oWWQ6cGqcLRrxINekS8FQpe0kgwhRZPgYc7K7UOVV_Aetx&_nc_ohc=Rb_qdXl7mJsAX9tSggX&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-vYYYaJakXF6qWRc7LFPU2ReYba0ipN8OWM1jOWKeYuQ&oe=623B1EA7",
            name: "Ludo Club",
            time: "1h",
            
          },
          {
            id: 9,
            productImg:"https://scontent.flhe13-1.fna.fbcdn.net/v/t45.5328-4/274248679_5146256802063268_3730774076823733200_n.jpg?stp=c109.0.260.260a_dst-jpg_p261x260&_nc_cat=1&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeHjjrKC8AU2rcnzbA9RFkFLaAEsP8Lj8YloASw_wuPxiWnMkZfQ7qFxGihWtUph1TRHezZqJzhNIva09LXu5m0h&_nc_ohc=7aLfg_jaxWUAX97Fac-&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-3gHS-GMUbvMngFjm_SguoRD5FZ_ts-yTg_kdjIsa9hw&oe=623A9EBF",
            name: "Ludo Club",
            time: "1h",
            
          },
          {
            id: 10,
            productImg:"https://scontent.flhe13-1.fna.fbcdn.net/v/t45.5328-4/274254517_4906755319439899_6387584825356239319_n.png?stp=c1.0.260.260a_dst-jpg_p261x260&_nc_cat=109&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeEYHbWYNtlsh9y6ITCf_UrytTKF9qNTtQW1MoX2o1O1BQMLC3QRMQA3zxTj8tyNzaEatqSwSjPCtzWGy-w5ZVjw&_nc_ohc=e4WAsFPeRAgAX8oQwnk&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-IvZB_mvX7kVdHHk2FblXYjH09DI_ULotcaws4LGRFog&oe=623BC1B2",
            name: "Ludo Club",
            time: "1h",
            
          }
          ,
          {
            id: 11,
            productImg:"https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/272899423_3071597296412382_6449989088918643183_n.jpg?stp=c0.106.960.960a_dst-jpg_s261x260&_nc_cat=108&ccb=1-5&_nc_sid=843cd7&_nc_eui2=AeEMuC10C519lfExCXKzGpfb5T7ZZZimwGXlPtllmKbAZRIKln8kA_-XdyyP0WnHoVix8pF2IAZ6r_IkXmYUmlEq&_nc_ohc=3UMJAU-fXX4AX8S26ru&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-LU5obTBgr5aWUvMou80ZuWZl5tWiTJ5HGRqx5vdI-sg&oe=623B93C1",
            name: "Ludo Club",
            time: "1h",
            
          },
        {
            id: 12,
            productImg:"https://scontent.flhe13-1.fna.fbcdn.net/v/t45.5328-4/274324162_4874353359350847_3463549707982968857_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=105&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeHtIoGLssr8iC-psljAQlh8Rfe7PLtqFllF97s8u2oWWQ6cGqcLRrxINekS8FQpe0kgwhRZPgYc7K7UOVV_Aetx&_nc_ohc=Rb_qdXl7mJsAX9tSggX&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-vYYYaJakXF6qWRc7LFPU2ReYba0ipN8OWM1jOWKeYuQ&oe=623B1EA7",
            name: "Ludo Club",
            time: "1h",
            
          },
          {
            id: 13,
            productImg:"https://scontent.flhe13-1.fna.fbcdn.net/v/t45.5328-4/274248679_5146256802063268_3730774076823733200_n.jpg?stp=c109.0.260.260a_dst-jpg_p261x260&_nc_cat=1&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeHjjrKC8AU2rcnzbA9RFkFLaAEsP8Lj8YloASw_wuPxiWnMkZfQ7qFxGihWtUph1TRHezZqJzhNIva09LXu5m0h&_nc_ohc=7aLfg_jaxWUAX97Fac-&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-3gHS-GMUbvMngFjm_SguoRD5FZ_ts-yTg_kdjIsa9hw&oe=623A9EBF",
            name: "Ludo Club",
            time: "1h",
            
          },
          {
            id: 14,
            productImg:"https://scontent.flhe13-1.fna.fbcdn.net/v/t45.5328-4/274254517_4906755319439899_6387584825356239319_n.png?stp=c1.0.260.260a_dst-jpg_p261x260&_nc_cat=109&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeEYHbWYNtlsh9y6ITCf_UrytTKF9qNTtQW1MoX2o1O1BQMLC3QRMQA3zxTj8tyNzaEatqSwSjPCtzWGy-w5ZVjw&_nc_ohc=e4WAsFPeRAgAX8oQwnk&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-IvZB_mvX7kVdHHk2FblXYjH09DI_ULotcaws4LGRFog&oe=623BC1B2",
            name: "Ludo Club",
            time: "1h",
            
          }
      ];
   return(data);
}
export default ShopData;